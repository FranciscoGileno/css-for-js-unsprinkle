import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Picture = ({ src, alt }) => {
  const srcNoExt = src.split(".").slice(0, -1);
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`
  ${srcNoExt}.avif 1x,
  ${srcNoExt}@2x.avif 2x,
  ${srcNoExt}@3x.avif 3x`}
      />
      <source
        type="image/jpg"
        srcSet={`
  ${srcNoExt}.jpg 1x,
  ${srcNoExt}@2x.jpg 2x,
  ${srcNoExt}@3x.jpg 3x`}
      />

      <Image src={`${srcNoExt}.jpg`} alt={alt} />
    </picture>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
