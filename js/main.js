console.log(`
👋 Hi there,

Check out my 💻Github https://github.com/matoululu

Follow me on 🐦Twitter https://twitter.com/omgmrm

You can also type portfolio.viewProject(number) or portfolio.viewPost(number) to check out the site
`);


const portfolio = {
  clearLog() {
    console.clear();
    console.log(`
    👋 Hi there,

    Check out my 💻Github https://github.com/matoululu

    Follow me on 🐦Twitter https://twitter.com/omgmrm

    You can also type portfolio.viewProject(number) or portfolio.viewPost(number) to check out the site
    `);
  },
  viewProject(number) {
    let info;
    if(projects[number]) {
      info =
      `
      ${projects[number].title}

      ${projects[number].text}

      ===

      View on Github ${projects[number].github}

      View site ${projects[number].site}
      `
    } else {
      info = `${number} not found try a number between 0 and ${Object.keys(projects).length}`
    }
    this.clearLog();
    return info;
  },
  viewPost(number) {
    let info;
    if(posts[number]) {
      info =
      `
      ${posts[number].title} Posted ${posts[number].posted}

      ==================





      ${posts[number].text}
      `
    } else {
      info = `${number} not found try a number between 0 and ${Object.keys(posts).length}`
    }
    this.clearLog();
    return info;
  }
}
