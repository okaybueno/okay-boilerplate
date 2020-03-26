<template>
    <div class="page">
        <div class="hero">
            <h1>okay boilerplate</h1>
        </div>

        <section class="content">
            <h1>Layout</h1>
            <p>Our layout is based on a flexbox grid approach – this boilerplate works with an eight column grid for all
                screen sizes, but feel free to chose whatever suits your project best. Please keep in mind that you will
                have to adjust the grid-el functions if you adjust the column approach. We use box-sizing border-box on
                all of our elements by default. Here are some examples:</p>
            <div class="grid grid--mrg">
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
            </div>
            <div class="grid grid--mrg">
                <div class="grid__el grid__el--1">
                    1
                </div>
                <div class="grid__el grid__el--2">
                    2
                </div>
                <div class="grid__el grid__el--4">
                    4
                </div>
                <div class="grid__el grid__el--1">
                    1
                </div>
            </div>
            <p>Note that we use either sizing variables based on rem values or directly the inner gutter variables,
                depending on what we want to achieve – inner gutter variables on margin help to create a unified grid
                while rem-based sizing variables help achieve a flexible layout system within components.</p>
            <p>In this slight more advanced example, you'll see how to achieve aligning a component freely in the grid
                by using appropriate margin and grid-el functions on the component:</p>
            <div class="grid grid--mrg">
                <div class="grid__el grid__el--3-3">
                    1
                </div>
            </div>
            <p>Layouts can easily be made responsive by defining the components width and margin values in media queries
                using our @mq function. Resize the browser window to see the effect:</p>
            <div class="grid">
                <div class="grid__el grid__el--rsp">
                    O
                </div>
                <div class="grid__el grid__el--rsp">
                    K
                </div>
                <div class="grid__el grid__el--rsp">
                    A
                </div>
                <div class="grid__el grid__el--rsp">
                    Y
                </div>
            </div>
        </section>
        <section class="content">
            <h1>Typescale</h1>
            <p>Our typescale is based on a responsive point size defined on the html element itself, using our mq mixin.
                Colors are not defined within the type.scss file, but within each component, with the notable exception
                of the a tag.</p>
            <h1>H1 Headline</h1>
            <h2>H2 Headline</h2>
            <h3>H3 Headline</h3>
            <h4>H4 Headline</h4>
            <p>Paragraph</p>
            <a href="#">Link</a>
            <ul>
                <li>
                    Unordered list
                </li>
                <li>
                    Unordered list
                </li>
            </ul>
            <ol>
                <li>
                    Ordered list
                </li>
                <li>
                    Ordered list
                </li>
            </ol>
            <label>Label</label>
        </section>
        <section class="content">
            <h1>Colors, Shadows, and Gradients</h1>
            <p>Colors, shadows, and gradients should all be defined as global variables in their respective scss
                files.</p>
            <h3>Primary & Secondary Colors</h3>
            <div class="colors">
                <div class="color color--primary"></div>
                <div class="color color--secondary"></div>
            </div>
            <h3>Grayscale</h3>
            <div class="colors">
                <div class="color color--grey-4"></div>
                <div class="color color--grey-3"></div>
                <div class="color color--grey-2"></div>
                <div class="color color--grey-1"></div>
            </div>
            <h3>Shadows</h3>
            <div class="colors">
                <div class="color color--shadow-button"></div>
                <div class="color color--shadow-card"></div>
            </div>
            <h3>Gradients</h3>
            <div class="gradient">
            </div>
        </section>
        <section class="content">
            <h1>Paddings & Margins</h1>
            <p>All paddings and margins should be based on rem values, to ensure a responsive visual consistency. Drag
                the browser window to see how the components react to the base font size changes.</p>
        </section>
        <section class="content">
            <h1>Components</h1>
            <p>Every element of a page is a component and should be treated as such in our scss approach: hero area,
                menus, buttons, input field with labels, image sliders, cards, but also sections and blocks of content
                should be treated as a component, which means all the css should be scoped in a separate scss file. To
                illustrate this approach, here's a sign up form with an input field and a button:</p>
            <div class="newseltter">

            </div>
        </section>
        <section class="content">
            <h1>Cards</h1>
            <p>Cards use multiple mixins for the general style and behaviour, sizing of the cards should always be
                defined on a separate component class, e. g. ".card-article"</p>
            <div class="cards">
                <div class="card-example">
                    Card
                </div>
                <div class="card-example">
                    Card
                </div>
                <div class="card-example">
                    Card
                </div>
                <div class="card-example">
                    Card
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Boilerplate'
    }
</script>