import { BillingForm } from "./_component/billing/BillingForm";
import OrderSummary from "./_component/Order/OrderSummary";


const BillingPage = () => {
    return (
        <div className="container section">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-10">
                <div>
                    <BillingForm />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
};

export default BillingPage;
