<template>
    <header class="header">
        <div class="tongue">
            <img src="../assets/tongue.png" alt="" @mouseover="languageAnimationOver" @mouseleave="languageAnimationLeave">
            <div class="langs">
                <div class="ru">RU</div>
                <div class="ua">UA</div>
            </div>
        </div>
        <div class="logo">
            <div class="white">
                <svg width="85" height="46" viewBox="0 0 85 46" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" stroke="black" clip-rule="evenodd" d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z" fill="white"/>
                </svg>
            </div>
            <div class="black">
                <svg width="85" height="46" viewBox="0 0 85 46" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" stroke="black" clip-rule="evenodd" d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div class="burger" @click="toggleMenu($event)">
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="1" fill="black"/>
                <rect y="9" width="22" height="1" fill="black"/>
            </svg>
        </div>
        <div class="burger-menu-list">
            <ul>
                <li><router-link :to="'/who'">who?</router-link></li>
                <li><router-link :to="'/what'">what?</router-link></li>
                <li><router-link :to="'/where'">where?</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
import gsap from 'gsap'
    export default {
        data() {
            return {
                isBurgerOpen: false
            }
        },

        mounted() {
            gsap.to('.white', {
                height: 0,
                duration: 3
            })
            
        },

        methods: {
            languageAnimationOver() {
                gsap.timeline().to('.ru', {
                    opacity: 1,
                    duration: .5
                }).to('.ua', {
                    opacity: 1,
                    duration: .5
                },'-=.4')
            },

            languageAnimationLeave() {
                gsap.timeline()
                .to('.ua', {
                    opacity: 0,
                    duration: .5
                }).to('.ru', {
                    opacity: 0,
                    duration: .5
                }, '-=.4')
            },

            toggleMenu(e) {
                let rects = e.target.children
                this.isBurgerOpen = !this.isBurgerOpen
                document.querySelector('.burger-menu-list').classList.toggle('active')
                for (let index = 0; index < rects.length; index++) {
                    if(this.isBurgerOpen) {
                        rects[index].style.fill = "white"
                    } else {
                        rects[index].style.fill = "black"
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        font-family: "Grtsk";
        z-index: 2;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 24px;

        .tongue {
            display: flex;
            padding-left: 24px;
            align-items: center;

            .langs {
                display: flex;
            }

            img {
                margin-right: 10px;
            }
            
            .ru {
                margin-right: 10px;
                opacity: 0;
            }

            .ua {
                opacity: 0;
            }
        }

        .logo {
            width: 86px;
            height: 46px;
            padding-right: 115px;   
            position: relative;
            .black {
                position: absolute;
                overflow: hidden;
                right: 0;
                left: 0;
                top: 0;
                height: 46px;
                z-index: 1;
            }
            .white {
                position: absolute;
                overflow: hidden;
                right: 0;
                left: 0;
                top: 0;
                height: 46px;
                z-index: 2;
            }
        }

        .burger {
            z-index: 1000;
            opacity: 0;
            margin-right: 24px;
        }

        .burger-menu-list {
            transform: translateY(-150%);
            transition: all .5s;
            padding-top: 41px;
            padding-bottom: 16px;
            z-index: 3;
            position: absolute;
            width: 100%;
            background-color: black;
            text-align: center;
            top: 0;
            ul {
                li {
                    a {
                        text-decoration: none;
                        color: white;
                    }
                }
                li:not(:last-child) {
                    margin-bottom: 10px;
                }
            }
        }

        .burger-menu-list.active {
            transform: translateY(0);
        }
    }


    @media (max-width: 1050px) {
        .header {
            .logo {
                padding-right: 82px;
            }
        }
    }

    @media (max-width: 375px) {
        .header {
            .tongue {
                display: flex;
                padding-left: 14px;
                align-items: center;
                font-size: 14px;
                line-height: 18px;

                .langs {
                    display: flex;
                }

                img {
                    margin-right: 5px;
                }
                
                .ru {
                    margin-right: 5px;
                    opacity: 0;
                }

                .ua {
                    opacity: 0;
                }
            }
            .logo {
                // padding-right: 0;
            }
            .burger {
                opacity: 1;
                z-index: 100;
            }

            .burger-menu-list {
                opacity: 1;
            }
        }
    }
</style>