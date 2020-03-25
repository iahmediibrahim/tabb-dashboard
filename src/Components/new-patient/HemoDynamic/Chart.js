import React from 'react';
import './styles.scss';

class CardiacChart extends React.Component {
    render() {
        const { diastolic_chart_data, systolic_chart_data } = this.props;
        let newData = [
            { type: 'low', rangeUp: 120, rangeDown: 60 },
            { type: 'normal', rangeUp: 140, rangeDown: 80 },
            { type: 'pre-high', rangeUp: 160, rangeDown: 90 },
            { type: 'high', rangeUp: 200, rangeDown: 120 },
        ];
        if (diastolic_chart_data !== undefined)
            for (let i = 0; i < diastolic_chart_data.length; i++) {
                newData[i].rangeUp = systolic_chart_data[i].in_value;
                newData[i].rangeDown = diastolic_chart_data[i].in_value;
            }

        //diastolic_chart_data UP
        let list = newData.map((mes, i) => {
            // let width = (mes.rangeUp - 72) * (1 / 130) * 100;
            // let height = (mes.rangeDown - 52) * (1 / 70) * 100;

            let height = (mes.rangeUp - 70) * 0.75;
            let width = (mes.rangeDown - 55) * (1 / 70) * 100;

            return (
                <div className={mes.type + ' val'} style={{ width: width + '%', height: height + '%' }} key={i}>
                    <span>{mes.type.toUpperCase()}</span>
                </div>
            );
        });

        return (
            <div className="blood-pressure">
                <h3>Diastolic</h3>
                <div className="axes">
                    <div className="contain">{list}</div>
                    <div className="y-axe">
                        <span>200+ </span>
                        <span>180</span>
                        <span>160</span>
                        <span>140</span>
                        <span>120</span>
                        <span>100</span>
                        <span>80</span>
                    </div>
                    <div className="x-axe">
                        <span>60</span>
                        <span>70</span>
                        <span>80</span>
                        <span>90</span>
                        <span>100</span>
                        <span>110</span>
                        <span>120+</span>
                    </div>
                </div>
                <h3>Systolic</h3>
            </div>
        );
    }
}

export default CardiacChart;

// <div className="x-axe">
//                         <span>80</span>
//                         <span>100</span>
//                         <span>120</span>
//                         <span>140</span>
//                         <span>160</span>
//                         <span>180</span>
//                         <span>200</span>
//                     </div>
//                     <div className="y-axe">
//                         <span>120</span>
//                         <span>110</span>
//                         <span>100</span>
//                         <span>90</span>
//                         <span>80</span>
//                         <span>70</span>
//                         <span>60</span>
//                     </div>
