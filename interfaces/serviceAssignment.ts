import { ServiceAssignmentStatus } from "../enums"

export interface ServiceAssignment {
    id: string
    citizenCode: string
    citizenId: string // Relación con el ciudadano
    serviceId: string // Relación con el servicio
    customPrice?: number // Precio fijo asignado por el supervisor
    dimensions?: { width: number, height: number } // Para servicios que requieren cálculo
    calculatedPrice?: number // Precio calculado basado en dimensiones u otros factores
    monthlyPaymentAmount?: number
    paymentDay?: number
    //Campos de la ubicación
    bloque?: string
    barrio?: string
    direccion?: string
    lat?: number
    lng?: number
    paymentNumbers?: number // meses a pagar
    startDate: Date
    status: ServiceAssignmentStatus
    endDate?: Date
    description?: string // Descripción para identificar el servicio, como "Letrero en la entrada"
}