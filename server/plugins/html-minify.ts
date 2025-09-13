/**
 * Plugin para minificar HTML, CSS, JS
 * @file server/plugins/html-minify.ts
 * @author DanSP
 * @version 1.0.0
 */

export default defineNitroPlugin((nitroApp) => {
  if (import.meta.server) {
    nitroApp.hooks.hook('render:html', (htmlContext) => {
      const compress = (str: string) => {
        // Preserve comentários internos do Vue
        return str
          // remove quebras e tabs desnecessários
          .replace(/\n+/g, ' ')
          .replace(/\t+/g, ' ')
          // remove múltiplos espaços
          .replace(/\s{2,}/g, ' ')
          // remove espaços entre tags que não sejam Vue comments
          .replace(/>(\s)+</g, '><')
          .trim()
      }

      // comprime head (ok minificar)
      htmlContext.head = htmlContext.head.map(compress)

      // comprime body, mas preserva o Vue (__nuxt)
      htmlContext.body = htmlContext.body.map((section) => {
        if (section.includes('<div id="__nuxt">')) {
          const parts = section.split(/(<div id="__nuxt">)/)
          const start = parts.shift() || ''
          const nuxtDiv = parts.shift() || ''
          const end = parts.join('')

          return compress(start) + nuxtDiv + end
        }
        return compress(section)
      })
    })
  }
})

// export default defineNitroPlugin((nitroApp) => {
//   if (import.meta.server) {
//     nitroApp.hooks.hook('render:html', (htmlContext) => {
//       const minify = (str: string) =>
//         str
//           .replace(/\n+/g, '') // remove quebras de linha
//           .replace(/\t+/g, '') // remove tabs
//           .replace(/\s{2,}/g, ' ') // remove espaços extras
//           .replace(/>\s+</g, '><') // remove espaços entre tags
//           .trim()

//       // Minifica somente head
//       htmlContext.head = htmlContext.head.map(minify)

//       // Minifica somente conteúdo fora do Vue
//       htmlContext.body = htmlContext.body.map((section) => {
//         if (section.includes('id="__nuxt"'))
//           return section // não toca no Vue
//         return minify(section)
//       })

//       // Mensagem no final
//       htmlContext.body.push('<!-- Desenvolvido pelo Mestre Supremo 👑 -->')
//     })
//   }
// })

// export default defineNitroPlugin((nitroApp) => {
//   nitroApp.hooks.hook('render:html', (htmlContext) => {
//     // minifica apenas head
//     htmlContext.head = htmlContext.head.map(s =>
//       s.replace(/<!--[\s\S]*?-->/g, '').replace(/\n+/g, ' ').trim(),
//     )

//     // mantém body intacto para Vue
//     htmlContext.body = htmlContext.body.map((section) => {
//       // se quiser, pode minificar só comentários fora do app root
//       if (!section.includes('id="__nuxt"')) {
//         return section.replace(/<!--[\s\S]*?-->/g, '').trim()
//       }
//       return section
//     })

//     // adicionar comentário fora do app root é seguro
//     htmlContext.body.push('<!-- Desenvolvido pelo Mestre Supremo 👑 -->')
//   })
// })

// export default defineNitroPlugin((nitroApp) => {
//   if (import.meta.server) {
//     nitroApp.hooks.hook('render:html', (htmlContext) => {
//       const minify = (str: string) =>
//         str
//           .replace(/<!--[\s\S]*?-->/g, '') // remove comentários
//           .replace(/\n+/g, '') // remove quebras
//           .replace(/\t+/g, '') // remove tabs
//           .replace(/\s{2,}/g, ' ') // espaços extras
//           .replace(/>\s+</g, '><') // espaços entre tags
//           .trim()

//       htmlContext.head = htmlContext.head.map(minify)
//       htmlContext.body = htmlContext.body.map(minify)
//       htmlContext.body.push('<!-- Desenvolvido pelo Mestre Supremo 👑 -->')
//     })
//   }
// })
