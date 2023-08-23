import {makeAutoObservable} from "mobx";

class BrandsX {
    brands:any = [
            {
                "id": "4c5d671d-4b68-4a8a-aece-272f91c6d91f",
                "name": "Academie",
                "icon": "27388458-d4c8-4d91-810c-df2c763cd4a9.jpg",
                "margin": 100
            },
            {
                "id": "9c44f061-6a7a-40a9-9c5c-b5c512bb5048",
                "name": "V45",
                "icon": "c0f061fe-8e64-4620-835a-517ce44f1c5d.jpg",
                "margin": 60
            }
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addBrand(bran:any){
        this.brands.push(bran)
    }


}

export default new BrandsX()