const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT提示词",
  logo: {
    alt: "ChatGPT Prompts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://iv6dtr6tzmb.feishu.cn/docx/RYadd4Lhjo9FBrxZD8VcunB1nCg",
      label: "提示词使用说明",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '友情链接',
      position: 'left',
      items: [
        {
          label: "GPT网址导航",
          href: "https://gpt8.fun",
        },
        {
          label: "GPT3.5免费体验",
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
