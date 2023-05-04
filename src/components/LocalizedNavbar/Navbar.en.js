const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT Prompts",
  logo: {
    alt: "ChatGPT Prompts",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut',
      label: 'Find on Product Hunt',
      target: '_blank',
      position: 'left',
    },
    { type: "localeDropdown", position: "right" },
  ],
};

module.exports = enNavbar;
