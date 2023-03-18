import { Request, Response } from "express"
import { zodiacs, zodicObj } from "../utils/zodiacs"

const checkZodiacCompatibility = (req: Request, res: Response) => {
    const { mName, mZodiac, pName, pZodiac } = req.params

    if (pName && pZodiac && mName && pZodiac) {
        console.log(pName, pZodiac, mName, mZodiac)
                    if (mZodiac.toLowerCase() === "taurus" && pZodiac.toLowerCase() === "cancer") {
                        return res.status(200).json({'message': `Awwwn... eyin lovebirds. My boss, show me way nau.`, 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "aries" && pZodiac.toLowerCase() === "aquarius") {
    
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "gemini" && pZodiac.toLowerCase() === "aquarius") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "cancer" && pZodiac.toLowerCase() === "pisces") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
    
                    else if (mZodiac.toLowerCase() === "leo" && pZodiac.toLowerCase() === "sagittarius") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "virgo" && pZodiac.toLowerCase() === "Taurus") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "gemini" && pZodiac.toLowerCase() === "libra") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
    
                    else if (mZodiac.toLowerCase() === "scorpio" && pZodiac.toLowerCase() === "cancer") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
    
                    else if (mZodiac.toLowerCase() === "pisces" && pZodiac.toLowerCase() === "scorpio") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "aquarius" && pZodiac.toLowerCase() === "gemini") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }
                    else if (mZodiac.toLowerCase() === "capricorn" && pZodiac.toLowerCase() === "Taurus") {
                        return res.status(200).json({'message': 'Awwwn... eyin lovebirds. My boss, show me way nau.', 'title': `Congratulations! ${mName} and ${pName}`, 'compatability': true})
                    }

                    else {
                        return res.status(200).json({ 'message': 'Omo, una gast breakup!! una no match. ', 'title': 'No Match!! Sorry chief', 'compatibility': false})
                    }
                }
        else {
            return res.status(400).json({'message': 'Fill in the details'})
        }
}

const checkLovePercentage = (req: Request, res: Response) => {
    const { mName, pName } = req.body

    if (!pName) {
        res.status(400).json({ 'message': "Partner's name is required"})
    }
    if (!mName) {
        res.status(400).json({ 'message': "Your name is required"})
    }

    if (mName && pName) {

        let numberOfMLetter: number;
        const maleLetterArray: string[] = []
        const sentence = `${mName} loves ${pName}`

        let firstName = [...mName];
        let love = ['l', 'o', 'v', 'e']
        const names = mName + pName

        let letterCount = 0
        let letterFreq  = {}

        for (let i = 0; i < (mName + pName).length; i++) { 
            if (names.charAt(i) === 'l') {
                letterCount += 1
                
            }
        }
        
        return res.send({"message": letterCount})
        
    }
}




module.exports = {
    checkZodiacCompatibility, checkLovePercentage
}