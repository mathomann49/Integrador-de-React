import styled from "styled-components";

export const FooterWrapperStyled = styled.div`
background-color: #18191a;
width: 100%;
.sbFooterSectionPadding {
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    color: #0683db;
}
.sbFooterLinks {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
}
.sbFooterLinksdiv {
    width: 150px;
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* color: white; */
    color: #0683db;
}
 span {
    color: rgb(175, 175, 179);
}
.socialMedia {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.sbFooterLinksDiv h4 {
    font-size: 14px;
    line-height: 17px;
    /* margin-bottom: 0.5rem; */
    margin-top: 35px;
    color: white;
}
.sbFooterLinksdiv span {
    font-size: 20px;
    line-height: 15px;
    margin: 0.5rem 0;
    cursor: pointer;
    color: blueviolet;
    transition: 0.5s all ease-out;
    &:hover {
            color: white;
            text-decoration: underline;
        }
}
.sbFooterBelow {
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.2rem;
}
.sbFooterBelowLinks {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
}
.sbFooterBelowLinks span {
    font-size: 13px;
    line-height: 15px;
    /* margin-top: 13px;
    margin-left: 2rem; */
    padding: 10px;
    /* color: white; */
    color: #0683db;
    font-weight: bold;
    transition: 0.5s all ease-out;
    &:hover {
            color: white;
            text-decoration: underline;
        }
}

.sbFooterCopyright {
    font-size: 13px;
    line-height: 15px;
    color:  #0683db;
    font-weight: bold;
}


@media screen and (max-Width: 765px) {
    .sbFooterBelow {
        align-self: center;
        justify-content: center;
        width: 100%;    
    }
}
@media screen and (max-Width: 546px) {
    .sbFooterBelowLinks,
    .sbFooterBelow {
        flex-direction: column;
        justify-content: center;
        align-items: center;    
    }
}

@media screen and (max-Width: 491px) {
    .sbFooterLinks {
        align-items: center;
        justify-content: center; 
    }
}


`