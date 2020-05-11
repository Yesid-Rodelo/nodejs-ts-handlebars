class Helpers {

    public hbsHelpers() {
        const helpersFunctions = {
            getAnio: () => {
                return new Date().getFullYear()
            },
            
            capitalizar: (text: string) => {
                let words: string[] = text.split(' ')
                words.forEach((word, i) => {
                    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                })
                return words.join(' ')
            }
        }
        return helpersFunctions
    }

}

export const helpers = new Helpers()