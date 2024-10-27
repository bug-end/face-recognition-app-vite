import styles from './FaceRecognition.module.scss';
import { FaceRecognitionProps } from './FaceRecognition.types';

export const FaceRecognition: React.FC<FaceRecognitionProps> = ({ imageUrl, boxes }) => {
  return (
    <div className={styles.imgWrapper}>
      <img id='inputimage' src={imageUrl} alt='' className={styles.img} />
      {boxes.map((box, i) => {
        return (
          <div
            key={i}
            className={styles.boundingBox}
            style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
          ></div>
        );
      })}
    </div>
  );
};
