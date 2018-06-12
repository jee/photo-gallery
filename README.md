
# Photo Gallery
This is a simple photo gallery that utilizes the ReactJS frontend library. Mock photo data was generated from utilizing the Unsplash API and using the response ([see here](https://github.com/jee/photo-gallery/blob/master/src/utils/mock-api-data.js)).

> When a user is using a **laptop**, **desktop computer**, or a **mobile
> phone in landscape orientation**, "chevron" selectors are used to
> navigate between photos.
>
> When a user is using a **mobile phone in portrait orientation**, the
> user can swipe to navigate between photos.

Though, this particular photo gallery implementation does not utilize Redux, the design pattern tries to closely follow Dan Abramov's "Presentational and Container Components" pattern.

`PhotoGalleryContainer` contains all the business logic used in the component and is the only component that is stateful. All other presentational components are stateless functional components that can be reused with different containers if the need ever arises.

This results in a file hierarchy that looks like:

```
  PhotoGalleryContainer   (Contain.)
  |__ PhotoGallery        (Pres.)
      |__ PhotoCounter    (Pres.)
      |__ Photo           (Pres.)
      |   |__ Caption     (Pres.)
      |__ Navigation      (Pres.)
```

## Checklist:
- [x] The PhotoGallery component should take in an array of images.
- [x] Each image will have a url and a caption.
- [x] The captions should be displayed over the image.
- [x] The PhotoGallery should allow users to either click or swipe through images.
- [x] Smoothly animate the swipe and transition between images.
- [x] Handle any edge cases you can think of.

## Technology used
- **FE Library**: [React](https://reactjs.org/)
- **Typechecking**: [FlowJS](https://flow.org/en/)
- **Testing**: [Enzyme](https://airbnb.io/projects/enzyme/)
- **Linting**: [ESLint](https://eslint.org/)
- **Style Formatting**:  [PrettierJS](https://prettier.io/)
- **Swipe Library**: [react-swipe](https://github.com/voronianski/react-swipe)

This project was also bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Test Coverage
All tests were written using Jest and Enzyme!
```
-----------------------------|----------|----------|----------|----------|-------------------|
File                         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------------|----------|----------|----------|----------|-------------------|
All files                    |      100 |    88.89 |      100 |      100 |                   |
 features                    |      100 |      100 |      100 |      100 |                   |
  App.js                     |      100 |      100 |      100 |      100 |                   |
 features/gallery/components |      100 |    83.33 |      100 |      100 |                   |
  caption.js                 |      100 |      100 |      100 |      100 |                   |
  navigation.js              |      100 |      100 |      100 |      100 |                   |
  photo-counter.js           |      100 |      100 |      100 |      100 |                   |
  photo-gallery.js           |      100 |      100 |      100 |      100 |                   |
  photo.js                   |      100 |       75 |      100 |      100 |                14 |
 features/gallery/containers |      100 |    91.67 |      100 |      100 |                   |
  photo-gallery-container.js |      100 |    91.67 |      100 |      100 |                34 |
-----------------------------|----------|----------|----------|----------|-------------------|
```
## Other notes
* All mockData photos are from [Unsplash](https://unsplash.com/)
* The Golden Gate favicon was made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
