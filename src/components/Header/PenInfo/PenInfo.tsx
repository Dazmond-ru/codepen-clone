import './penInfo.scss';

import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { BsPencil } from 'react-icons/bs';

export const PenInfo = ({ title = 'Untitled', author = 'Captain Anonymous' }) => {
  const [penTitle, usePenTitle] = useState(title);
  const [isEditTitle, useEditTitle] = useState(false);
  const onBtn = () => {
    useEditTitle(!isEditTitle);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const onBlurInput = () => {
    usePenTitle(inputRef.current?.value || title);
    useEditTitle(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="pen-info">
      <div className="pen-info__title">
        <span onClick={onBtn} className={cn({ 'pen-info__title-text': true, isVisHidden: isEditTitle })}>
          {penTitle}
        </span>

        <div onClick={onBtn} className={cn({ 'pen-info__title-btn': true, isVisHidden: isEditTitle })}>
          <BsPencil />
        </div>
        <input
          ref={inputRef}
          onBlur={onBlurInput}
          type="text"
          className={cn({ 'pen-info__input': true, isVisHidden: !isEditTitle })}
          placeholder={title}
        />
      </div>
      <div className="pen-info__author">{author}</div>
    </div>
  );
};