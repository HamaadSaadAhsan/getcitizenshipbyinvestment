import React, {useState, useEffect} from "react";
import {Head, Link} from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import "../../../css/article.css"

const View = ({post, categories}) => {
    const [isPopoverOpen, setPopoverOpen] = useState(false); // State to manage popover visibility

    const togglePopover = () => {
        setPopoverOpen(!isPopoverOpen); // Toggle popover visibility
    };

    const closePopover = (event) => {
        if (event.target.closest('#popover-wrapper') === null) {
            setPopoverOpen(false); // Close popover if clicked outside
        }
    };

    useEffect(() => {
        if (isPopoverOpen) {
            document.addEventListener('click', closePopover); // Add event listener
        } else {
            document.removeEventListener('click', closePopover); // Clean up event listener
        }
        return () => {
            document.removeEventListener('click', closePopover); // Clean up on unmount
        };
    }, [isPopoverOpen]);

    const modifiedContent = post.content
        .replace(/<p>/g, '<p class="article_p">')
        .replace(/<h2>/g, '<h2 class="article_h2">')
        .replace(/&nbsp;/g, '')
        .replace(/<h3>/g, '<h3 class="article_h3">')
        .replace(/<h4>/g, '<h4 class="article_h4">');

    return (
        <Layout categories={categories}>
            <Head>
                <title>{post.title}</title>
                <meta head-key="title" name="title" content={post.title}/>
                <meta head-key="description" name="description" content={post.description}/>
                <meta head-key="robots" name="robots"
                      content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
                <meta head-key="author" name="author" content={post.user.name} />
            </Head>

            <article>
                {/* title block */}
                <div className="sc-18fde0d6-0 eeiVGB">
                    <h1 className="sc-518485e5-0 bWszMR">{post.title}</h1>
                </div>

                <div data-component="byline-block" className="dlWCEZ">
                    <div data-testid="byline-new" className="sc-2b5e3b35-0 dWFSHg">
                        <div className="sc-2b5e3b35-1 jTEdni">
                            <time className="sc-2b5e3b35-2 fkLXLN">6 hours ago</time>
                            <div className="sc-2b5e3b35-3 kZrEzh">
                                <div data-testid="popoverWrapper" id="popover-wrapper"
                                     className={`sc-93f6dc26-1 fRrxoV`}>
                                    <div data-testid="popoverTrigger" id="popover-trigger">
                                        <button type="button" data-testid="socialShareTriggerButton" aria-label="Share"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 hYnulS cUALdr ketEwj"
                                                onClick={togglePopover}>
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 kTVKRs">
                                                <svg width="12" height="14" viewBox="0 0 12 14"
                                                     xmlns="http://www.w3.org/2000/svg" category="social" icon="share"
                                                     aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M9.51768 8.96851C8.95518 8.96851 8.44393 9.19851 8.07227 9.57018L4.19727 7.36685C4.24893 7.18768 4.2856 7.00185 4.2856 6.80685C4.2856 6.61102 4.24977 6.42518 4.19893 6.2456L8.06143 4.04935C8.43393 4.42602 8.94977 4.66102 9.51768 4.66102C10.661 4.66102 11.5852 3.73643 11.5852 2.60893C11.5852 1.46518 10.661 0.541016 9.51768 0.541016C8.38977 0.541016 7.4656 1.46518 7.4656 2.60893C7.4656 2.78727 7.49602 2.95768 7.53935 3.12352L3.70727 5.37643C3.33143 4.98477 2.80477 4.73935 2.2181 4.73935C1.09018 4.73935 0.166016 5.6631 0.166016 6.80685C0.166016 7.93476 1.09018 8.85851 2.2181 8.85851C2.8006 8.85851 3.32435 8.61726 3.69977 8.23268L7.54602 10.4943C7.49893 10.6681 7.4656 10.8473 7.4656 11.036C7.4656 12.1639 8.38977 13.0881 9.51768 13.0881C10.661 13.0881 11.5852 12.1639 11.5852 11.036C11.5852 9.89268 10.661 8.96851 9.51768 8.96851">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">Share</span>
                                        </button>
                                    </div>

                                    <div data-testid="popoverStyled"
                                         className={`sc-93f6dc26-2 ${isPopoverOpen ? "gNEKVR" : 'hidden'} popover`}>
                                        <button type="button" data-testid="facebookShareButton" aria-label="Facebook"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU"><svg
                                                width="9" height="16" viewBox="0 0 9 16"
                                                xmlns="http://www.w3.org/2000/svg" category="social" icon="facebook"
                                                aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path
                                                    d="M6.80799 2.65602H8.31199V0.112024C7.58379 0.0363015 6.85211 -0.00108342 6.11999 2.38913e-05C3.94399 2.38913e-05 2.456 1.32802 2.456 3.76002V5.85601H0V8.70401H2.456V16H5.39999V8.70401H7.84799L8.21599 5.85601H5.39999V4.04002C5.39999 3.20002 5.62399 2.65602 6.80799 2.65602Z"></path>
                                            </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">Facebook</span>
                                        </button>
                                        <button type="button" data-testid="twitterShareButton" aria-label="X (Twitter)"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" category="social" icon="x"
                                                     aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                    <path
                                                        d="M8.3319 5.92804L13.5437 0H12.3087L7.78327 5.14724L4.16883 0H0L5.46574 7.78354L0 14H1.2351L6.01406 8.56434L9.83117 14H14L8.3316 5.92804H8.3319ZM6.64026 7.85211L6.08647 7.07705L1.68013 0.909776H3.57717L7.13314 5.88696L7.68693 6.66202L12.3093 13.1316H10.4122L6.64026 7.85241V7.85211Z"></path>
                                                </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">X (Twitter)</span>
                                        </button>
                                        <button type="button" data-testid="linkedinShareButton" aria-label="LinkedIn"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                                <svg width="15" height="15" viewBox="0 0 15 15"
                                                     xmlns="http://www.w3.org/2000/svg" category="social"
                                                     icon="linkedin" aria-hidden="true"
                                                     className="sc-2c06e71a-0 fsMljb">
                                                    <path
                                                        d="M3.14795 1.57476C3.14775 1.99221 2.98172 2.39247 2.68639 2.6875C2.39107 2.98253 1.99063 3.14816 1.57319 3.14795C1.15575 3.14775 0.755481 2.98172 0.460451 2.68639C0.16542 2.39107 -0.000208525 1.99064 1.97032e-07 1.57319C0.000208919 1.15575 0.166238 0.755481 0.461564 0.460451C0.756889 0.16542 1.15732 -0.000208525 1.57476 1.97032e-07C1.99221 0.000208919 2.39247 0.166238 2.6875 0.461564C2.98253 0.756889 3.14816 1.15732 3.14795 1.57476ZM3.19517 4.31348H0.0472195V14.1666H3.19517V4.31348ZM8.16894 4.31348H5.03673V14.1666H8.13746V8.99607C8.13746 6.11569 11.8914 5.84811 11.8914 8.99607V14.1666H15V7.92576C15 3.07004 9.44386 3.25105 8.13746 5.63563L8.16894 4.31348Z"></path>
                                                </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">LinkedIn</span>
                                        </button>
                                        <button type="button" data-testid="emailShareButton" aria-label="Email"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                                <svg width="16" height="12" viewBox="0 0 16 12"
                                                     xmlns="http://www.w3.org/2000/svg" category="social" icon="email"
                                                     aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M0.480469 11.9585H15.5175V0.0410156H0.480469V11.9585ZM13.391 1.30052L7.99897 5.92452L2.60797 1.30052H13.391ZM14.2025 2.06252V10.6615H1.79647V2.06252L7.99897 7.91752L14.2025 2.06252Z"></path>
                                                </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">Email</span>
                                        </button>
                                        <button type="button" data-testid="copyShareButton" aria-label="Copy"
                                                className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                            <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                                <svg width="14" height="16" viewBox="0 0 14 16"
                                                     xmlns="http://www.w3.org/2000/svg" category="social" icon="copy"
                                                     aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M0.128906 0.480469V11.759H3.90691V15.518H13.8699V4.23997H10.0914V0.480469H0.128906ZM1.46341 1.79647H8.75691V4.23997H3.90691V10.4425H1.46341V1.79647ZM5.24191 14.2025H12.5344V5.55547H5.24191V14.2025Z"></path>
                                                </svg>
                                            </span>
                                            <span data-testid="button-text" aria-hidden="false"
                                                  className="sc-a8273305-1 juomiH">Copy</span>
                                        </button>
                                        <button data-testid="popoverCloseButton" className="sc-93f6dc26-3 hNMPSK">
                                            <svg viewBox="0 0 32 32" width="20" height="20" category="actions"
                                                 icon="close" className="sc-2c06e71a-0 fsMljb">
                                                <path
                                                    d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8L30 4.6zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9L4.8 1.8z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-testid="byline-new-contributors" className="sc-2b5e3b35-12 bRrXa-D">
                            <div className="sc-2b5e3b35-5 bpnWmT">
                                <div>
                                    <span className="sc-2b5e3b35-7 bZCrck">{post.posted_by}</span>
                                    <div className="sc-2b5e3b35-8 gxaSLA">
                                        <span>{''}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sc-2b5e3b35-4 iUVdrl">
                            <div data-testid="popoverWrapper" id="popover-wrapper" className={`sc-93f6dc26-1 fRrxoV`}>
                                <div data-testid="popoverTrigger" id="popover-trigger">
                                    <button type="button" data-testid="socialShareTriggerButton" aria-label="Share"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 hYnulS cUALdr ketEwj"
                                            onClick={togglePopover}>
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 kTVKRs">
                                            <svg width="12" height="14" viewBox="0 0 12 14"
                                                 xmlns="http://www.w3.org/2000/svg" category="social" icon="share"
                                                 aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M9.51768 8.96851C8.95518 8.96851 8.44393 9.19851 8.07227 9.57018L4.19727 7.36685C4.24893 7.18768 4.2856 7.00185 4.2856 6.80685C4.2856 6.61102 4.24977 6.42518 4.19893 6.2456L8.06143 4.04935C8.43393 4.42602 8.94977 4.66102 9.51768 4.66102C10.661 4.66102 11.5852 3.73643 11.5852 2.60893C11.5852 1.46518 10.661 0.541016 9.51768 0.541016C8.38977 0.541016 7.4656 1.46518 7.4656 2.60893C7.4656 2.78727 7.49602 2.95768 7.53935 3.12352L3.70727 5.37643C3.33143 4.98477 2.80477 4.73935 2.2181 4.73935C1.09018 4.73935 0.166016 5.6631 0.166016 6.80685C0.166016 7.93476 1.09018 8.85851 2.2181 8.85851C2.8006 8.85851 3.32435 8.61726 3.69977 8.23268L7.54602 10.4943C7.49893 10.6681 7.4656 10.8473 7.4656 11.036C7.4656 12.1639 8.38977 13.0881 9.51768 13.0881C10.661 13.0881 11.5852 12.1639 11.5852 11.036C11.5852 9.89268 10.661 8.96851 9.51768 8.96851">
                                                </path>
                                            </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">Share</span>
                                    </button>
                                </div>

                                <div data-testid="popoverStyled"
                                     className={`sc-93f6dc26-2 ${isPopoverOpen ? "gNEKVR" : 'hidden'} popover`}>
                                    <button type="button" data-testid="facebookShareButton" aria-label="Facebook"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU"><svg
                                            width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg"
                                            category="social" icon="facebook" aria-hidden="true"
                                            className="sc-2c06e71a-0 fsMljb">
                                            <path
                                                d="M6.80799 2.65602H8.31199V0.112024C7.58379 0.0363015 6.85211 -0.00108342 6.11999 2.38913e-05C3.94399 2.38913e-05 2.456 1.32802 2.456 3.76002V5.85601H0V8.70401H2.456V16H5.39999V8.70401H7.84799L8.21599 5.85601H5.39999V4.04002C5.39999 3.20002 5.62399 2.65602 6.80799 2.65602Z"></path>
                                        </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">Facebook</span>
                                    </button>
                                    <button type="button" data-testid="twitterShareButton" aria-label="X (Twitter)"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" category="social" icon="x"
                                                 aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path
                                                    d="M8.3319 5.92804L13.5437 0H12.3087L7.78327 5.14724L4.16883 0H0L5.46574 7.78354L0 14H1.2351L6.01406 8.56434L9.83117 14H14L8.3316 5.92804H8.3319ZM6.64026 7.85211L6.08647 7.07705L1.68013 0.909776H3.57717L7.13314 5.88696L7.68693 6.66202L12.3093 13.1316H10.4122L6.64026 7.85241V7.85211Z"></path>
                                            </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">X (Twitter)</span>
                                    </button>
                                    <button type="button" data-testid="linkedinShareButton" aria-label="LinkedIn"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                            <svg width="15" height="15" viewBox="0 0 15 15"
                                                 xmlns="http://www.w3.org/2000/svg" category="social" icon="linkedin"
                                                 aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path
                                                    d="M3.14795 1.57476C3.14775 1.99221 2.98172 2.39247 2.68639 2.6875C2.39107 2.98253 1.99063 3.14816 1.57319 3.14795C1.15575 3.14775 0.755481 2.98172 0.460451 2.68639C0.16542 2.39107 -0.000208525 1.99064 1.97032e-07 1.57319C0.000208919 1.15575 0.166238 0.755481 0.461564 0.460451C0.756889 0.16542 1.15732 -0.000208525 1.57476 1.97032e-07C1.99221 0.000208919 2.39247 0.166238 2.6875 0.461564C2.98253 0.756889 3.14816 1.15732 3.14795 1.57476ZM3.19517 4.31348H0.0472195V14.1666H3.19517V4.31348ZM8.16894 4.31348H5.03673V14.1666H8.13746V8.99607C8.13746 6.11569 11.8914 5.84811 11.8914 8.99607V14.1666H15V7.92576C15 3.07004 9.44386 3.25105 8.13746 5.63563L8.16894 4.31348Z"></path>
                                            </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">LinkedIn</span>
                                    </button>
                                    <button type="button" data-testid="emailShareButton" aria-label="Email"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                            <svg width="16" height="12" viewBox="0 0 16 12"
                                                 xmlns="http://www.w3.org/2000/svg" category="social" icon="email"
                                                 aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M0.480469 11.9585H15.5175V0.0410156H0.480469V11.9585ZM13.391 1.30052L7.99897 5.92452L2.60797 1.30052H13.391ZM14.2025 2.06252V10.6615H1.79647V2.06252L7.99897 7.91752L14.2025 2.06252Z"></path>
                                            </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">Email</span>
                                    </button>
                                    <button type="button" data-testid="copyShareButton" aria-label="Copy"
                                            className="sc-a8273305-2 sc-a8273305-5 sc-a8273305-6 sc-a8273305-7 oyzDp cUALdr juiFjD jciIjj">
                                        <span data-testid="button-icon-wrapper" className="sc-a8273305-0 gWwQNU">
                                            <svg width="14" height="16" viewBox="0 0 14 16"
                                                 xmlns="http://www.w3.org/2000/svg" category="social" icon="copy"
                                                 aria-hidden="true" className="sc-2c06e71a-0 fsMljb">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M0.128906 0.480469V11.759H3.90691V15.518H13.8699V4.23997H10.0914V0.480469H0.128906ZM1.46341 1.79647H8.75691V4.23997H3.90691V10.4425H1.46341V1.79647ZM5.24191 14.2025H12.5344V5.55547H5.24191V14.2025Z"></path>
                                            </svg>
                                        </span>
                                        <span data-testid="button-text" aria-hidden="false"
                                              className="sc-a8273305-1 juomiH">Copy</span>
                                    </button>
                                    <button data-testid="popoverCloseButton" className="sc-93f6dc26-3 hNMPSK">
                                        <svg viewBox="0 0 32 32" width="20" height="20" category="actions" icon="close"
                                             className="sc-2c06e71a-0 fsMljb">
                                            <path
                                                d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8L30 4.6zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9L4.8 1.8z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-component="image-block" className="jFCfG ">
                    <div className="jdpAET bdPeAJ">
                        <div className="kcsaYe">
                            <div style={{position: 'relative', height: '100%', width: '100%', paddingBottom: 0}}>
                                <img src={post.image} alt={post.title} className="absolute w-full h-full"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dlWCEZ">
                    <div dangerouslySetInnerHTML={{__html: modifiedContent}}></div>
                </div>
                {/* meta block */}
            </article>

        </Layout>
    )
}


export default View;
