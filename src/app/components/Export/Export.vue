<template>
   <div class="col-md-6">
        <div class="card card-default">
            <div class="card-header">{{ topTitle }}</div>
            <div class="card-body">
                <form class="form-horizontal">
                    <div class="form-group row">
                        <label class="col-xl-4 col-form-label">{{ startTitle }}</label>
                        <div class="col-xl-10">
                            <div class="mb-3">
                                <datepicker
                                v-model="start_date"
                                :bootstrapStyling="true"
                                :monday-first="true"
                                :full-month-name="true"
                                placeholder="Select start date"
                                :calendar-button="true"
                                calendar-button-icon="far fa-calendar"
                                :clear-button="true"
                                :disabled-dates="disabledDates"
                                />
                               
                            </div>
                        </div>
                        <label class="col-xl-4 col-form-label">{{ endTitle }}</label>
                        <div class="col-xl-10">
                            <div class="mb-3">
                                <datepicker
                                v-model="end_date"
                                :bootstrapStyling="true"
                                :monday-first="true"
                                :full-month-name="true"
                                placeholder="Select end date"
                                :calendar-button="true"
                                calendar-button-icon="far fa-calendar"
                                :clear-button="true"/>
                              
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-xl-10">
                            <button type="button" class="btn btn-primary" @click.prevent="canceltest">產生</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div> 
</template>
<script>
 import Datepicker from 'vuejs-datepicker'
 import moment from 'moment'
 import propsync from "../Custom/propsync";

export default {
    name: 'ExportDate',
    mixins: [propsync], //声明使用propsync的mixin
    components: { Datepicker },
    data() {
        return{
            // Datepicker
            start_date: moment().toDate(),
            end_date: moment().toDate(),
            disabledDates: {
                days: [0] // Disable sunday
            },
        }
    },
    props:{
        startTitle: { type: String, default: 'start' },
        endTitle: { type: String, default: 'end' },
        topTitle: { type: String, default: 'top' }
        // from_date: { type: String, propsync: true },
        // to_date: { type: String, propsync: true }

    },
    methods: {
        canceltest (){
            console.log('start', this.start_date)
            console.log('end', this.end_date)
             let vm = this;
            vm.p_from_date = vm.start_date;
            vm.p_to_date = vm.end_date;
            console.log('canceltest===>', 'canceltest')
        }
    }
}
</script>