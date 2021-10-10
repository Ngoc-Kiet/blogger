import React from 'react'

function About() {
    return (
        <main>
            <div className="tile">
                <div className="readme">
                    <div className="readme-version">
                        Version 1.0 (Mar 25, 2020)
                    </div>
                    <div className="readme-tille">
                        Read me
                    </div>
                </div>
            </div>
            <div className="text">
                <div className="text-box">
                    How this file can be used
                </div>
                <div className="text-tile">
                    <div className="no"></div>
                    <p>Feel free to use this file in any way you want, you can edit a copy of this file as much as you want
                        for non-commercial or commercial purposes. It’s not necessary, but if you want, you can ping me at
                        @mikamatikainen on Twitter when using this file. Would be just nice to see how this evolves :-)
                        Images: Copyright © Unsplash or Mika Matikainen.</p>
                </div>
            </div>
            <div className="text1">
                <div className="text-box">
                    A note about typefaces
                </div>
                <div className="text-tile">
                    <div className="no1"></div>
                    <p>This file is using platform-native typefaces for iOS & macOS, designed by Apple. To make texts
                        editable, you can download the typefaces at https://developer.apple.com/fonts/</p>
                </div>
            </div>
            <div className="text2">
                <div className="text-box">
                    Fonts used on the live site
                </div>
                <div className="text-tile">
                    <div className="no2"></div>
                    <p>Just for reference or if you’re interested, I list here the typefaces I’m using in on the live site
                        at https://www.nordicrose.net. If you’d like to use them in your own project, I added links for you
                        as well to make it easier to purchase the required license.</p>
                    <div className="GTF">
                        <div className="GTF-tile">GTF Chapter</div>
                        <div className="GTF-text">
                            <div className="GTF-text_box">– used in the logo as a vector outline</div>
                            <div className="GTF-text_box1">– by Good Type Foundry (https://www.goodtypefoundry.com/chapter)
                            </div>
                        </div>
                    </div>
                    <div className="MD">
                        <div className="MD-tile">Mackay Bold</div>
                        <div className="MD-text">
                            <div className="MD-text_box">– body copy</div>
                            <div className="MD-text_box1">– by Okay Type (https://okaytype.com/typefaces/harriet)</div>
                        </div>
                    </div>
                    <div className="BGP">
                        <div className="BGP-tile">Basis Grotesque Pro</div>
                        <div className="BGP-text">
                            <div className="BGP-text_box">– UI elements, some subtitles and some body copy </div>
                            <div className="BGP-text_box1">– by Colophon Foundry
                                (https://www.colophon-foundry.org/typefaces/basis-grotesque/)</div>
                        </div>
                    </div>
                    <div className="NCF">
                        <div className="NCF-tile">NOKIA CELLPHONE FC</div>
                        <div className="NCF-text">
                            <div className="NCF-text_box">– some playful elements at some point, maybe </div>
                            <div className="NCF-text_box1">– by Zeh Fernando, available for free at Dafont
                                (https://www.dafont.com/nokia-cellphone.font)</div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default About