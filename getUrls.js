const fs = require('fs')
const path = require('path')
const readline = require('readline')

/**
 * Return the page title
 */
async function getPages(dir) {
  const files = fs.readdirSync(dir)

  const mdxFiles = files.filter((file) => path.extname(file) === '.mdx')

  const result = await Promise.all(
    mdxFiles.map(async (file) => {
      const fileStream = fs.createReadStream(dir + '/' + file)

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
