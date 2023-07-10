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
.a {
    color: rgb(175, 175, 179);
}
.socialMedia {
    width: 80%;
}

.sbFooterLinksDiv h4 {
    font-size: 14px;
    line-height: 17px;
    /* margin-bottom: 0.5rem; */
    margin-top: 35px;
    color: white;
}
.sbFooterLinksdiv p {
    font-size: 20px;
    line-height: 15px;
    margin: 0.5rem 0;
    cursor: pointer;
}
.sbFooterBelow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.2rem;
}
.sbFooterBelowLinks {
    display: flex;
    flex-direction: row;
}
.sbFooterBelowLinks p {
    font-size: 13px;
    line-height: 15px;
    margin-left: 2rem;
    /* color: white; */
    color: #0683db;
    font-weight: bold;
}

.sbFooterCopyright {
    font-size: 13px;
    line-height: 15px;
    color:  #0683db;
    font-weight: bold;
}
@media screen and (max-Width: 850px) {
    
}
`