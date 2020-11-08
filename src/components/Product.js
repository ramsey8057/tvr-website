import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {

        super(props)

    }

    render = () => {

        const { image, caption } = this.props
        const width = '100%'
        const height = '100%'

        return (
            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 '}>
                <figure className={'figure'}>
                    <img src={image} className={'rounded mx-auto d-block'} style={{width: `${width}`, height: `${height}`}} alt={'Responsive img'} />
                    <figcaption className={'figure-caption'}>
                        <h3 className={'text-center'}>{caption}.</h3>
                        <section className={'d-flex justify-content-center'}>
                            <button className={'btn btn-success'}>Visit {caption}</button>
                        </section>
                    </figcaption>
                </figure>
            </div>
        )

    }

}
