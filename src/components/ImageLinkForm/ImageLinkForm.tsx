import { Button } from '@components/Button/Button';

import styles from './ImageLinkForm.module.scss';
import { ImageLinkFormProps } from './ImageLinkForm.types';

export const ImageLinkForm: React.FC<ImageLinkFormProps> = ({ onInputChange, onButtonSubmit, inputValue }) => {
  return (
    <div className={styles.imageLinkFormWrapper}>
      <p className={styles.description}>This Magic Brain will detect faces in your pictures. Give it a try!</p>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='paste image URL here'
          onChange={onInputChange}
          autoComplete='off'
          className={styles.input}
          value={inputValue}
        />
        <Button onClick={onButtonSubmit}>Detect</Button>
      </div>
    </div>
  );
};
