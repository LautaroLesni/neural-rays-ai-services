import React from "react";
import s from './AISolutions.module.css'
import divider from '../assets/divider.png'
import car from '../assets/electric-vehicle.jpg'
import reduction from '../assets/environmental-risk-reduction.png'
import industrial from '../assets/industrial-ai.jpg'
import remotehealth from '../assets/remote-health-monitoring.png'
import warehouse from '../assets/smart-warehouse-management-3.jpg'
import virtualreality from '../assets/virtual-reality.jpg'

const AISolutions = () => {
    return (
    <div className={s.AISolutionsDIV}>
        <div className={s.AIHeader}>
        <h1>AI Solutions</h1>
        </div>
        <div className={s.contenedor}>
        <div className={s.textDIV}>
            <h2>Electric Vehicle Charging (EVC)</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>Our EVC platform encourages the adoption and use of electric vehicles by addressing today’s challenges and issues around vehicle charging.</strong>
            <p>To promote the use of electric vehicles as part of the electric vehicle (EV) revolution, we are building an AI solution that will incentivise citizens and organisations to be part of the EV ecosystem. Underpinned by Blockchain technology, this platform brings transparency across the value chain and addresses the future demand for EV charging.</p>
        </div>
        <img src={car} alt='car' className={s.car}/>
        </div>

        <div className={s.contenedorleft}>
        <img src={reduction} alt='reduction' className={s.reduction}/>
        <div className={s.textDIVleft}>
            <h2>Environmental Risk Reduction</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>A risk exchange in which organisations can create customised marketplaces for monetising and managing environmental risks.</strong>
            <p>Using a combination of AI, geospatial analytics and distributed ledger technology, our platform supports the flexible and rapid open market collaboration between both the demand and supply sides of complex environmental stakeholder networks. Importantly, it incentivises funding and investment into distributed solutions to combat flooding, water scarcity, water pollution and other environmental challenges. Distributed ledger technology is used to support the management of payments across a value chain throughout the life cycle of each solution, enabling each investment to be traced right through to each outcome. Ultimately, the platform can be connected to IoT-enabled systems so that real-time verification of services can trigger automated payments, and value chains can automatically be flexed to respond to real-time events.</p>
        </div>
        </div>
        <div className={s.contenedor}>
        <div className={s.textDIV}>
            <h2>Preventive Maintenance and Worker Safety</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>An AI solution delivering the benefits of Industry 4.0. It both identifies and prevents defects on the assembly line and protects the health and safety of workers.</strong>
            <p>Our multi-faceted solution helps industrial organisations improve both quality and worker safety by identifying defects and hazards within a manufacturing plant. It does this through a combination of image, video and sensor-based analytics.</p>
        </div>
        <img src={industrial} alt='industrial' className={s.industrial}/>
        </div>
        <div className={s.contenedorhealth}>
        <img src={remotehealth} alt='remote health' className={s.remotehealth}/>
        <div className={s.textDIVhealth}>
            <h2>Remote Health Monitoring</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>A platform to assist with the real-time health monitoring of elderly and vulnerable people.</strong>
            <p>Our next generation health platform monitors and reports on the health of patients and other elderly and vulnerable people. It incorporates intelligent algorithms to monitor a person’s health, working with mobile and web applications, and integrated with an ‘SOS’ service.</p>
        </div>
        </div>
        <div className={s.contenedor}>
        <div className={s.textDIV}>
            <h2>Smart Warehouse Management</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>An end-to-end integrated solution to optimise efficiencies within a warehouse by combining the power of AI, IoT, Blockchain and edge computing with energy, environment, mobility, asset, resource and security management.</strong>
            <p>Features include:</p>
            <ul>
                <li>Smart Energy – sensor-based systems to control light, temperature and other electric equipment to optimise energy needs, thereby contributing to carbon footprint reduction.</li><br />
                <li>Smart Environment – active environment monitoring to track and predict indoor air pollution, fire and air circulation.</li><br />
                <li>Smart Mobility – real time vehicle and pallet status.</li><br />
                <li>Smart Inventory – automated inventory management and geo-fencing.</li><br />
                <li>Smart Security – unauthorised access and product tracking.</li>
            </ul>
        </div>
        <img src={warehouse} alt='warehouse' className={s.industrial}/>
        </div>
        <div className={s.contenedorleft}>
        <img src={virtualreality} alt='virtual reality' className={s.reduction}/>
        <div className={s.textDIVleft}>
            <h2>Virtual Reality for Smart Engineering</h2>
            <img src={divider} alt='divider' className={s.divider}/>
            <strong>Innovative engineering solutions created from the combination of virtual reality (VR) and building information modelling (BIM).</strong>
            <p>Through our partnership with eLearning Studios, a market leader in virtual reality solutions, our solution enables inspection of a building during the design stage before construction has commenced. This provides the real life experience of walking through the building and identifying deviations as if walking through the actual building. <br /> <br />
            Designers can use virtual reality technology to help their clients and potential clients envision how a project is will look when completed, offering virtual tours of buildings and spaces and seeking feedback around options. Collaborating design teams can use virtual reality to assess whether their designs are constructible. And people can be trained in working in a new building before it has been completed. <br /><br />
            These are just a few of the use cases of virtual reality in the built environment. We’d love to discuss other ideas you might have too.</p>
        </div>
        </div>
    </div>)
}
export default AISolutions