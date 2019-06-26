import React, { PureComponent, useMemo } from 'react';
import { WebMapTileServiceImageryProvider } from 'cesium';
import { ImageryLayer, ImageryLayerCollection } from 'resium';
import memoize from 'memoize-one';

const imageryProvider = memoize(imageryProvider => new WebMapTileServiceImageryProvider(imageryProvider));
// const imageryProvider = imageryProvider => new WebMapTileServiceImageryProvider(imageryProvider);

// const ImageryLayers = React.memo(
//   ({ imageryProviders }) => {
//     console.log('ImageryLayers render');
//     return (
//       <ImageryLayerCollection>
//         {imageryProviders.map((item, i) => {
//           return <ImageryLayer key={i} imageryProvider={imageryProvider(item)} />;
//         })}
//       </ImageryLayerCollection>
//     );
//   },
//   (prevProps, nextProps) => prevProps.imageryProviders === nextProps.imageryProviders
// );

class ImageryLayers extends PureComponent {
  render() {
    console.log('ImageryLayers render');
    return (
      <ImageryLayerCollection>
        {this.props.imageryProviders.map((item, i) => {
          return <ImageryLayer key={i} imageryProvider={imageryProvider(item)} />;
        })}
      </ImageryLayerCollection>
    );
  }
}

export default ImageryLayers;
