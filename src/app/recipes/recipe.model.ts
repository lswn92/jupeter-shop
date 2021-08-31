export class Recipe {


    // public name: string;
    // public description: string;
    // public imagePath: string;

    // // 초기화시키자~~
    // constructor(name: string, desc:string, imgPath: string) {
    //     this.name = name;
    //     this.description = desc;
    //     this.imagePath = imgPath;
    // }


    // 위의 방식은 타이핑 치기 귀찮으므로 아래 방식으로 하면 편하다
    constructor(public id: number,public name: string, public desc:string, public imgPath: string) {}

}