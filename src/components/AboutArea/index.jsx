import React from 'react'
import AboutImage from '../../Assets/main_04.png';
import {Container} from './style';
import Title from '../Title';

export default function AboutArea() {
    return(
        <Container>
            <img src={AboutImage} alt="spoon"/>
            <div className='about--content'>
                <Title title="About"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi tincidunt, tortor nec rhoncus dictum, 
                    lorem massa tempus sem, eu tincidunt libero velit sit amet velit. 
                    Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, 
                    nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. 
                    Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, 
                    quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. 
                    Orci varius natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien 
                    facilisis aliquam.
                </p>
            </div>
        </Container>
    )
}