import { useState } from 'react'
import { AppsSidebar, Content, Header } from '@fluffylabs/shared-ui'

const HIDDEN_TOOL_LOGO = 'data:image/gif;base64,R0lGODlhAQABAAAAACw='

function App() {
    const [showAllProjects, setShowAllProjects] = useState(false)

    return (
        <div className="site-shell">
            <div className="site-header">
                <Header toolNameSrc={HIDDEN_TOOL_LOGO} ghRepoName="fluffylabs.github.io" keepNameWhenSmall />
            </div>
            <div className="site-layout">
                <AppsSidebar activeLink="website" className="website-apps-sidebar" />
                <Content className="website-content">
                    <div className="content-wrap">
                        <nav className="quick-links" aria-label="Main">
                            <a href="#project">projects</a>
                            <a href="//github.com/FluffyLabs" target="_blank" rel="noreferrer">github</a>
                            <a href="//x.com/fluffylabs_dev" target="_blank" rel="noreferrer">twitter</a>
                            <a href="https://t.me/+yxOiImXU3O5mYzhk" target="_blank" rel="noreferrer">telegram</a>
                            <a href="#contact">get in touch</a>
                        </nav>

                        <section className="hero-panel">
                            <div className="hero-label">why are <s>we</s> you here?</div>
                            <h1>fluffy labs</h1>
                            <p>hey there! we build fluffy blockchain stuff. talk is cheap, so see our github for the code.</p>
                            <div className="hero-actions">
                                <a href="//github.com/FluffyLabs" className="btn" target="_blank" rel="noreferrer">view github</a>
                                <a href="https://t.me/+yxOiImXU3O5mYzhk" className="btn-transparent" target="_blank" rel="noreferrer">join telegram</a>
                            </div>
                        </section>

                        <section className="projects-panel" id="project">
                            <div className="section-heading">
                                <h2>projects</h2>
                                <p>no fluff - we build stuff</p>
                            </div>

                            <article className="project featured-project">
                                <div className="project-icon-wrap">
                                    <img src="/assets/images/logo-typeberry.svg" alt="typeberry icon" />
                                </div>
                                <div className="project-copy">
                                    <h3>typeberry</h3>
                                    <p>our flagship project is the jam protocol implementation called typeberry. it is written in typescript, so it might not be the fastest but we strive to make it the most useful for jam-based tool developers and the most helpful for other jam implementors.</p>
                                    <p>check out the repository to learn more about our jam implementation.</p>
                                    <div className="project-actions">
                                        <a href="//github.com/fluffylabs/typeberry" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                        <a href="#contact" className="btn">contact</a>
                                    </div>
                                </div>
                            </article>

                            <div className={`project-grid ${showAllProjects ? 'expanded' : ''}`}>
                                <article className="project">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-pvm-debugger.svg" alt="pvm debugger icon" />
                                    </div>
                                    <h3>pvm debugger</h3>
                                    <p>pvm is a new virtual machine based on risc-v and designed specifically for jam. we have built a web-based tool to disassemble pvm programs and after plugging in one of available pvm implementations also running &amp; debugging it.</p>
                                    <a href="//github.com/fluffylabs/pvm-debugger" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                    <a href="//pvm.fluffylabs.dev" className="btn" target="_blank" rel="noreferrer">app</a>
                                </article>

                                <article className="project">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-graypaper-reader.svg" alt="gray paper reader icon" />
                                    </div>
                                    <h3>gray paper reader</h3>
                                    <p>to accelerate jam implementation, we have built a web-based reader for the <a href="//graypaper.com" target="_blank" rel="noreferrer">gray paper</a>. it allows sharing links to a selection and manage personal notes. there is also an ai assistant to help explaining the concise form of the paper.</p>
                                    <a href="//github.com/fluffylabs/graypaper-reader" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                    <a href="//graypaper.fluffylabs.dev" className="btn" target="_blank" rel="noreferrer">app</a>
                                </article>

                                <article className="project">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-jam-search.svg" alt="jam search icon" />
                                    </div>
                                    <h3>jam search</h3>
                                    <p>search for jam-related content on the web &amp; matrix chat rooms</p>
                                    <a href="//github.com/fluffylabs/jam-search" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                    <a href="//search.fluffylabs.dev/" className="btn" target="_blank" rel="noreferrer">app</a>
                                </article>

                                <article className="project project-extra">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-codec.svg" alt="jam codec icon" />
                                    </div>
                                    <h3>jam codec</h3>
                                    <p>encode &amp; decode basic jam data structure&apos;s</p>
                                    <a href="//github.com/fluffylabs/codec" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                    <a href="//codec.fluffylabs.dev" className="btn" target="_blank" rel="noreferrer">app</a>
                                </article>

                                <article className="project project-extra">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-state-viewer.svg" alt="state viewer icon" />
                                    </div>
                                    <h3>state viewer</h3>
                                    <p>A web application for inspecting JAM state data. Upload serialized state dumps in JSON format to view and analyze their contents. Includes trie visualization for educational purposes.</p>
                                    <a href="//github.com/FluffyLabs/state-viewer" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                    <a href="//state.fluffylabs.dev" className="btn" target="_blank" rel="noreferrer">app</a>
                                </article>

                                <article className="project project-extra">
                                    <div className="project-icon-wrap small">
                                        <img src="/assets/images/logo-jam-testing.svg" alt="jam-testing icon" />
                                    </div>
                                    <h3>jam-testing</h3>
                                    <p>tools and test resources for validating JAM implementations.</p>
                                    <a href="//github.com/FluffyLabs/jam-testing" className="btn-transparent" target="_blank" rel="noreferrer">code</a>
                                </article>
                            </div>

                            {!showAllProjects && (
                                <button type="button" className="btn-transparent more-projects" onClick={() => setShowAllProjects(true)}>
                                    moar?
                                </button>
                            )}
                        </section>

                        <section className="contact-panel" id="contact">
                            <div className="contact-illustration">
                                <img src="/assets/images/footer-pads.svg" alt="Fluffy Labs decorative pads" />
                            </div>
                            <div className="contact-copy">
                                <h3>get in touch</h3>
                                <p>join our telegram group to if you&apos;d like to contribute to one of our tools or have a chat</p>
                                <div className="contact-telegram">
                                    <a href="https://t.me/+yxOiImXU3O5mYzhk" className="btn-transparent" target="_blank" rel="noreferrer">join telegram</a>
                                </div>
                                <p>if for some weird reason you are interested in speaking with us directly feel free to get in touch using the form below. but honestly we would rather have you create a github issue or a pull request instead.</p>
                                <form target="_blank" action="https://formsubmit.co/30ab57883c0cf1725f236ef9d4b87ab9" method="POST">
                                    <input type="hidden" name="_subject" value="contact from fluffylabs.dev" />
                                    <input type="text" name="_honey" style={{ display: 'none' }} />
                                    <div className="form-wrap"><input type="text" name="name" placeholder="name" /></div>
                                    <div className="form-wrap"><input type="text" name="email" placeholder="email" /></div>
                                    <div className="form-wrap"><textarea name="message" placeholder="describe why you bother us" /></div>
                                    <button type="submit" className="btn">send</button>
                                </form>
                            </div>
                        </section>

                        <footer className="page-footer">
                            <a href="#project">projects</a>
                            <a href="//github.com/FluffyLabs" target="_blank" rel="noreferrer">github</a>
                            <span>&copy; 2026 fluffy labs</span>
                        </footer>
                    </div>
                </Content>
            </div>
        </div>
    )
}

export default App
