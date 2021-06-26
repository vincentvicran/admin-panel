import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs.2444</span>
                    <span className="featuredMoneyRate">
                        -11.3 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs.2444</span>
                    <span className="featuredMoneyRate">
                        +2.3 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs.2444</span>
                    <span className="featuredMoneyRate">
                        -5.3 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}
