export interface Product {
    id: string
    name: string
    isRetailAllowed: boolean
    brand: {
        id: string
        name: string
    }
    images: []
}

export interface IClients {
    email: string
    firmName: string
    lastName: string
    name: string
    phone: string
    role: string

}

export interface IFuture {
    datetime: string
    description: string
    id: string
    image: string
    mobileImage: string
    name: string
    speaker: string
    speaker_speciality: string
}


export interface IHistory {
    date: string
    description: string
    id: string
    image: string
    mobileImage: string
    name: string
}

export interface IRequest {
    id: string
    date: string
    seminar: {
        id: string
        name: string
    }
    user: {
        id: string
        phone: string
        name: string
        lastName: string
        secondName: string
        firmName: string
    }
}

export interface IProtocol {
    id: string
    name: string
    description: string
    isRetailAllowed: boolean
    brand: {
        id: string
        name: string
    }
    protocol_category: {
        id: string
        name: string
    }
    products: Product[]
}


export interface IProtocolCategory {
    id: string
    name: string
}

export interface IPromocode {
    id: string
    name: string
    percent: number
    promocode: string
    catalog_product: {
        "id": string
        "name": string
        "position": number
        "__v": number
    }
    sub_catalog_product: {
        "id": string
        "name": string
        "position": number
        "catalog_product": string
        "__v": number
    }
    products: Product[]
}

export interface IBanners {
    createdAt: string
    updatedAt: string
    id: string
    name: string
    description: string
    percent: string
    image: string
    mobileImage: string
    availableFor: string
    type: string
    promocode: {
        id: string
        name: string
        promocode: null
        percent: number
        price: null
    },
    products: Product[]
}

export interface IBrands {
    icon: string
    id: string
    margin: number
    name: string
}


export interface ICategory {
    id: string
    name: string
    position: number
    __v: number
}

export interface ISubCategory {
    id: string
    name: string
    position: number
    catalog_product: string
    __v: number
}

export interface ICities {
    address: string
    id: string
    name: string
}

export interface IOrders {
    id: string
    order_type: string
    total: number
    isViewedByAdmin: boolean
    order_number: string
    delivery_type: string
    isPayed: boolean
    user: {
        id: string
        name: string
        lastName: string
        secondName: string
        firmName: string
        role: string
    }
    warehouse: {
        city: string
    }
    date: string
}

export interface Images {
    name: string
}

export interface ICharacteristics {
    "id": string
    "key": string
    "value": string
}

export interface IProducts {
    "id": string
    "nameFrom1C": string
    "name": string
    "codeFrom1C": string
    "brand": {
        "id": string
        "name": string
        "icon": string
    }
    "description": string
    "images": Images[]
    "price": number
    "sub_catalog_product": {
        "id": string
        "name": string
        "position": number
    },
    "catalog_product": {
        "id": string
        "name": string
        "position": number
    }
    "variations": [
        {
            "id": number
            "value": string
            "code": string
        }
    ]
    "characteristics": ICharacteristics[]
    "tags": [
        {
            "id": string
            "name": string
        }
    ]


}