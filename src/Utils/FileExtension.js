const getUrlExtension = urls => {
  let extension = urls.slice(
    (Math.max(0, urls.lastIndexOf('.')) || Infinity) + 1,
  );
  console.log(extension);
};

export default getUrlExtension;
