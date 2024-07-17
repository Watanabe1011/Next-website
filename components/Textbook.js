import siteMetadata from "../utils/siteMetaData";
import Image from "next/image";

export default function TextBook() {
    return (
      <div>
        <header>
	<h2 className="h2 article-title">Textbook</h2>
</header>

<section className="colorlib-textbook" id="textbook">
	<div className="colorlib-narrow-content">
		<div className="row">
			<div className="col-md-12" >
					<div className="row mt-4" id="text-book">
						<div className="col-md-12">
							<a target="_blank" rel="noopener noreferrer" href={siteMetadata.textbook}>
								<img className="text-image" src="/assets/img/dan_textbook.webp" alt="Gologorsky D, Rosen RB. Principles of Ocular Imaging" loading="lazy"/>
							</a>
                        </div>
					</div>
				<div className="row">
					<div className="col-md-12 text-center text-desc">
						<p>Gologorsky D, Rosen RB. 
							<a className="show-link" target="_blank" rel="noopener noreferrer" href={siteMetadata.textbook}z>
								<i>Principles of Ocular Imaging.</i>
							</a> 
							Thorofare, NJ: SLACK, Inc.; 2020. 
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="row">
		<div className="col-md-12 p-2 m-2">
		<p>Dr. Gologorsky is author of Principles of Ocular Imaging. This textbook is a definitive and comprehensive guide of all current ocular imaging modalities for ophthalmologists, optometrists, and those in training. Dr. Gologorsky delivers a concise yet thorough overview of 22 imaging modalities unique to ophthalmology, emphasizing clinical application and replete with illustrative examples and ophthalmic images. This book is used extensively in residency training programs throughout the United States.</p>
		</div>
  </div>
</section>
      </div>
    
  )
}
