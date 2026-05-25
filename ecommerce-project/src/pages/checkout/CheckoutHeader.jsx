import { Link } from 'react-router'
import logoWhite from '../assets/logo-white.png'
import mobileLogoWhite from '../assets/mobile-logo-white.png'
import checkoutLockIcon from '../assets/icons/checkout-lock-icon.png'
import './CheckoutHeader.css'
export function CheckoutHeader(){
    return(
        <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src={logoWhite} />
                            <img className="mobile-logo" src={mobileLogoWhite} />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src={checkoutLockIcon} />
                    </div>
                </div>
            </div>
    )
}