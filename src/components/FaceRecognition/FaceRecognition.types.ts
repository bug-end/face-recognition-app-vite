export interface FaceRecognitionProps {
  imageUrl: string;
  boxes: {
    topRow: number;
    rightCol: number;
    bottomRow: number;
    leftCol: number;
  }[];
}
