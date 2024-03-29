// export class FaceSnap {
//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imageUrl: string;

//   constructor(
//     title: string,
//     description: string,
//     createdDate: Date,
//     snaps: number,
//     imageUrl: string
//   ) {
//     this.title = title;
//     this.description = description;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//     this.imageUrl = imageUrl;
//   }
// }
export class FaceSnap {
  id! : number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location? : string;
}
