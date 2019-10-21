export const scrollIntoView = (element: HTMLElement, smooth = true) => {
  element.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start",
    inline: "nearest"
  });
};

export const selectedFilter = (
  params: object,
  key: string,
  value?: string
): object => {
  params = { ...params, [key]: value, page: 1 };
  if (!value || !value.toString().trim().length) {
    delete params[key];
  }
  return params;
};
