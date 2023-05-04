const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT提示词",
  logo: {
    alt: "ChatGPT Prompts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://gpt8.fun",
      label: "GPT网址导航",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '友情链接',
      position: 'left',
      items: [
        {
          label: "GPT3.5最新地址",
          href: "https://gpt6.fun",
        },
        {
          label: 'GPT4体验地址',
          href: 'https://chatgpt-4.fun',
        },
      ],
    },
    { type: "localeDropdown", position: "right" },
  ],
};

module.exports = zhNavbar;
