let callData = {

    genre: "",
    year: 1,
    keyword: ""

};


export function setCallData(g: string, y: number, k:string) {
    callData.genre = g;
    callData.year = y;
    callData.keyword = k;

}

export function setGenre(g:string) {
    callData.genre = g; 
}
export function setYear(g: number) {
    callData.year = g;
}
export function setKeyword(g: string) {
    callData.keyword = g;
}

export function getCallData() {
    return callData;
}



