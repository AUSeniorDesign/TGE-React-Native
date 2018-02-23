
export default class StringParser {

      /*
      This method returns the first image in the list of images 
      that each item contains so that it can be displayed in the list.
      */

    static getFirstImage(images) {
        if (images != "") {
            return images.split(',')[0]
        } else {
            return 'https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png/revision/latest?cb=20170219125728'
        }
    }

    static removeHTML(description) {
        var str = description
        str=str.replace(/<br>/gi, "\n");
        str=str.replace(/<p.*>/gi, "\n");
        str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ");
        str=str.replace(/<(?:.|\s)*?>/g, "");
        return str
    }
}

