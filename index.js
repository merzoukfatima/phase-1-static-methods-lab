class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1))
  }
  static sanitize(string) {
    //create a class with regex
    return string.replace(/[^a-zA-Z-'\s]/g,"")
  }
  static titleize(string) {
    //put all the except words in an array
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // split because we need array functions
    return string.split(" ").map((element, index) => {
      // if not found in except or  was the first word
      return (except.indexOf(element) === -1 || index === 0) ? this.capitalize(element) : element
      // capitalize it else leave it
    }).join(" ") // when finish return to string
    //:)
  }
}
