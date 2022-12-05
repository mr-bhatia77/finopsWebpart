import * as React from 'react';
import styles from './Finops.module.scss';
import { IFinopsProps } from './IFinopsProps';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class Finops extends React.Component<IFinopsProps, {}> {
  public render(): React.ReactElement<IFinopsProps> {
    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    // } = this.props;

    // React.useEffect(()=>{
    //   console.log('hello')
    // },[])
    
    return (
      <div className={styles.centerAlign}>
        hello
      </div>
    );
  }
}
