const getUrlExtension = urls => {
  let extensions = urls.slice(
    (Math.max(0, urls.lastIndexOf('.')) || Infinity) + 1,
  );
  console.log(extensions);
};

export default getUrlExtension;
