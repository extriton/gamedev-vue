<template>
    <transition name="modal">
        <div v-if="SHOW_DETAIL" class="detail-modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <!-- <div class="col-10 offset-1"> -->
                    <div class="modal-container">
                        
                        <div class="modal-header">
                            <h3>{{ pkg.package.name }} {{ pkg.package.version }}</h3>
                        </div>
                        <div class="modal-body">
                            <p><b>Publisher:</b><br />
                            Username: {{ pkg.package.publisher.username }}<br />
                            Email: {{ pkg.package.publisher.email }}<br />
                            </p>
                            <p><b>Date:</b><br />{{ pkg.package.date | localdate }}</p>
                            <p><b>Description:</b><br />{{ pkg.package.description }}</p>
                            <p><b>Keywords:</b><br />
                                <span
                                    v-for="(item, index) in pkg.package.keywords"
                                    :key="'k' + index"
                                >
                                    {{ item}}, 
                                </span>
                            </p>
                            <p><b>Links:</b><br />
                                <span
                                    v-for="(item, index) in pkg.package.links"
                                    :key="'l' + index"
                                >
                                    {{ item}}<br />
                                </span>
                            </p>
                            <p><b>Etc...</b></p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary modal-default-button" @click="$emit('close')">OK</button>
                        </div>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DetailModal',
    props: {
        pkg: {
            type: Object,
            default: null
        }
    },
    computed: {
        ...mapGetters('packages', ['SHOW_DETAIL'])
    },
    filters: {
        localdate: function (value) {
            if (!value) return ''
            return new Date(value).toLocaleString()
        }
    }
}
</script>

<style lang="scss">
.detail-modal {
    text-align: left;
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        transition: opacity 0.3s ease;
    }
    .modal-wrapper {
        position: absolute;
        display: block;
        width: 80%;
        max-height: 80%;
        overflow-y: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .modal-container {
        margin: 0px auto;
        padding: 3px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    @media all and (max-width: 576) {
        .modal-header h3 {
            font-size: 16px;
        }
    }
    .modal-body {
        margin: 0;
    }
    .modal-default-button {
        float: right;
    }
}
.modal-enter {
    opacity: 0;
}
.modal-leave-active {
    opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
