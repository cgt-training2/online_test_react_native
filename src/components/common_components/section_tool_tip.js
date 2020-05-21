import React, { Component } from "react";
import {
    Text, 
    View
} from 'react-native';

// Dependency
import { Tooltip } from 'react-native-elements';

// Summary: This class will provide the tooltip for sections
export default class SectionToolTip extends Component{
    
    constructor(props){
        super(props);
        this.toolTipDesign = this.toolTipDesign.bind(this);
        this.getSectionsDetails = this.getSectionsDetails.bind(this);
    }

    // Summary: it'will show the tooltip design and description of an section.
    toolTipDesign(){
        return <Text> Hello, How are you </Text>;
    }

    // Summary: Use to create buttons with title for each section.
    getSectionsDetails(){
        let sectionInfoView = this.props.sectionNamesProps.map((sectionInfo, index) => (
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View 
                    style = {{ height: '100%', paddingLeft: 5, paddingRight: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: this.props.sectionButtonsColorArrayProps[index] }}>
                    <Tooltip 
                        containerStyle = {{ height: '100%', paddingLeft: 5, paddingRight: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}
                        popover = { this.toolTipDesign() }
                        backgroundColor = {'#000'}
                        onOpen = { () => {
                            this.props.navigationToSectionProps(index);
                    }}>
                        <Text>
                            { sectionInfo }
                        </Text>
                    </Tooltip>
                </View>
            </View>
        ));
        return <View style = {{ width: '100%', height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            { sectionInfoView }
        </View>;
    }

    render(){
        return(
            
            this.getSectionsDetails()
        );
    }
}