const fs = require('fs')
const path = require('path')
const readline = require('readline')

/**
 * Return the page title
 */
async function getPages(dir) {
  // list files in directory
  const files = fs.readdirSync(dir)

  // get only mdx files
  const mdxFiles = files.filter((file) => path.extname(file) === '.mdx')

  const result = await Promise.all(
    mdxFiles.map(async (file) => {
      // create a read stream from file
      const fileStream = fs.createReadStream(dir + '/' + file)

      // read each line from file
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      })

      for await (const line of rl) {
        if (line.includes('title:')) {
          return {
            title: /'(.*?)'/.exec(line)[1],
            url: path.basename(file, '.mdx'),
          }
        }
      }
    })
  )

  fs.writeFile('./pages.json', JSON.stringify(result), (e) => {
    if (e) throw err
    console.log('Created pages file!')
  })
}

getPages(process.argv[2])
