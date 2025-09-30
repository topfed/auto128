import React from "react";

const Image = ({ data }) => {
  const cloudURL = `https://firebasestorage.googleapis.com/v0/b/spirit-92da0.firebasestorage.app/o/###?alt=media`;

  const imgElement = (
    <img
      width={data?.width}
      height={data?.height}
      src={
        data?.local
          ? data?.src
          : cloudURL?.replace("###", encodeURIComponent(`trust/${data?.src}`))
      }
      alt={data?.alt}
      loading={data?.loading || "lazy"}
      decoding={data?.decoding || "async"}
      fetchpriority={data?.fetchpriority || "low"}
    />
  );

  if (data?.srcm) {
    return (
      <picture>
        <source
          srcSet={cloudURL?.replace(
            "###",
            encodeURIComponent(`trust/${data?.srcm}`)
          )}
          media="(max-width: 768px)"
        />
        {imgElement}
      </picture>
    );
  }

  return imgElement;
};

export default Image;
