const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')

const config = JSON.parse(fs.readFileSync(path.resolve('sites', 'config.json')));

let importMarkdownStr = ``
const mds = []
const raws = []

// 遍历配置组件
config.nav.map((item) => {
  item.packages.forEach((element) => {
    // 从配置中获取到配置选项
    let { name, show } = element

    // 配置现实组件
    if (show) {
      glob
        .sync(
          path.join(__dirname, `../components/${name.toLowerCase()}/jd/`) +
            '*.md'
        )
        .map((f) => {
          let lang = 'zh-CN'
          let matched = f.match(/doc\.([a-z-]+)\.md/i)

          if (matched) {
            ;[, lang] = matched
            const langComponentName = `${name}${lang.replace('-', '')}`
            importMarkdownStr += `import ${langComponentName} from '@/components/${name.toLowerCase()}/jd/doc.${lang}.md?raw';\n`
            raws.push(langComponentName)
          }
        })
      // doc 文档  
      importMarkdownStr += `import ${name} from '@/components/${name.toLowerCase()}/jd/doc.md?raw';\n`
      mds.push(name)
      raws.push(name)
    }
  })
})




// 输出doc文档
let mdFileStr = `${importMarkdownStr}
export const routers = [${mds.map((m) => `'${m}'`)}]
export const raws = {${raws.join(',')}}
`

// 最后输出一份doc 文档
fs.outputFile(
  path.resolve(__dirname, '../sites/docs.ts'),
  mdFileStr,
  'utf8',
  (error) => {
    if (error) throw error
  }
)
