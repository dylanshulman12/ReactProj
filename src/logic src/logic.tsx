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

export function CheckData() {
    //getting inputs 

    let ge = "&with_genres="

    if (callData.genre != "") {
        ge = ge + callData.genre;
    } else {
        ge = "";
    }

    let ke = "&with_keywords="

    if (callData.keyword != "") {
        ke = ke + callData.keyword;
    } else {
        ke = "";
    }

    let yr = "&year="

    if (callData.year != 1) {
        yr = yr + callData.year;
    } else {
        yr = "";
    }

    //getting main call
    let data = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${ge}${ke}${yr}`

    console.log(data)
    return data
}



