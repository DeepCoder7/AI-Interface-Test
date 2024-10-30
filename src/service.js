import { catchService } from "./utils/responseFormatter";

const Service = () => {}

Service.askFinance = async() => {
    try {
        
    } catch (error) {
        return catchService(
            error,
            "service",
            "Service.askFinance"
        )
    }
}

export default Service;