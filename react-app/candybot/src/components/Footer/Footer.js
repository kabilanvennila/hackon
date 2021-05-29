import React from 'react';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
       {/*   <SocialLogo to='/'>
            {/* <SocialIcon /> */}
            {/* Add The Logo PNG HERE! 
            Candy
          </SocialLogo> */}
          <WebsiteRights>Candy © 2021</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
