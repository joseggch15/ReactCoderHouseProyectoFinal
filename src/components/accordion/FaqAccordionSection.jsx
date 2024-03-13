import React, { useState } from 'react'
import { accordionList } from '../../data/Data';

const FaqAccordionSection = () => {
    const [openAccordionId, setOpenAccordionId] = useState(0);

    const handleAccordionBtn = (itemId) => {
        setOpenAccordionId((prevState) => (prevState === itemId ? null : itemId));
    };
  return (
    <div className="faq-accordion-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {accordionList.slice(0,4).map((item) => (
                       <div
                        className={`fz-single-accordion-item ${
                            openAccordionId === item.id ? 'open' : ''
                        }`}
                        key={item.id}
                        >
                        <div
                            className="fz-single-accordion-item__header"
                            role="button"
                            onClick={() => handleAccordionBtn(item.id)}
                        >
                            <h3 className="fz-single-accordion-item__title">{item.title}</h3>
                            <i className="fa-regular fa-plus"></i>
                        </div>

                        <p className="fz-single-accordion-item__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed aliquet nisi. Nam nec nisi et lectus eleifend rhoncus. Integer nec enim sed elit varius lobortis sit amet ut libero. Sed vestibulum orci eget nisi dignissim, sit amet cursus arcu lacinia. Sed ultricies lorem et ipsum vestibulum, sit amet lacinia nulla efficitur. Cras vestibulum nunc at mauris viverra, nec laoreet libero pretium. Nullam id ligula quam. Integer commodo orci vel ex faucibus tincidunt. Sed porta nisi id quam blandit, at rhoncus turpis eleifend. Maecenas nec fermentum metus, at ultricies velit. Phasellus eu ex ut nisi hendrerit condimentum eget non velit. Curabitur eget velit nunc. Nunc et tellus sit amet nunc finibus dapibus. Aenean in vestibulum eros. Vivamus feugiat quam ut ultricies mattis.
                        </p>
                    </div> 
                    ))}
                </div>

                <div className="col-md-6">
                    {accordionList.slice(4).map((item) => (
                        <div
                            className={`fz-single-accordion-item ${
                            openAccordionId === item.id ? 'open' : ''
                            }`}
                            key={item.id}
                        >
                            <div
                            className="fz-single-accordion-item__header"
                            role="button"
                            onClick={() => handleAccordionBtn(item.id)}
                            >
                                <h3 className="fz-single-accordion-item__title">{item.title}</h3>
                                <i className="fa-regular fa-plus"></i>
                            </div>

                            <p className="fz-single-accordion-item__body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed aliquet nisi. Nam nec nisi et lectus eleifend rhoncus. Integer nec enim sed elit varius lobortis sit amet ut libero. Sed vestibulum orci eget nisi dignissim, sit amet cursus arcu lacinia. Sed ultricies lorem et ipsum vestibulum, sit amet lacinia nulla efficitur. Cras vestibulum nunc at mauris viverra, nec laoreet libero pretium. Nullam id ligula quam. Integer commodo orci vel ex faucibus tincidunt. Sed porta nisi id quam blandit, at rhoncus turpis eleifend. Maecenas nec fermentum metus, at ultricies velit. Phasellus eu ex ut nisi hendrerit condimentum eget non velit. Curabitur eget velit nunc. Nunc et tellus sit amet nunc finibus dapibus. Aenean in vestibulum eros. Vivamus feugiat quam ut ultricies mattis.
                            </p>
                        </div> 
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FaqAccordionSection