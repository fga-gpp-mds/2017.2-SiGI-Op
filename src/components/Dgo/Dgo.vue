<template>
  <div id="gods">

    <v-dialog v-model="dialog" persistent width="50%">
     <v-btn primary dark slot="activator">Register DGO</v-btn>
     <v-card>
       <v-alert error
       :value="alert"
       hide-icon
       transition="scale-transition">
         Failed to regiter the {{name}}. Please, verify if you filled correctly the fields.
       </v-alert>
       <v-card-title>
         <span class="headline"> Register {{ 'DGO' | capitalize }} </span>
       </v-card-title>
       <v-card-text>
         <v-container grid-list-md>
           <form>
             <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    label="Codigo do DGO"
                    :rules="[rules.notNull]"
                    v-model="code"
                  >
                  </v-text-field>
                  <v-layout row>
                    <v-select v-bind:items="fabricants" v-model="fabricant" label="Fabricante" :rules="[rules.notNull]" item-text="description"  bottom></v-select>
                    <fabricant v-on:registerFab="getFabricants()" ></fabricant>
                  </v-layout>
                  <v-select v-if="fabricant && models.length>0" v-bind:items="models" v-model="god_model" label="Modelo DGO" :rules="[rules.notNull]" item-text="name" bottom></v-select>
                  <v-select v-bind:items="sites" v-model="site_id" label="Site" :rules="[rules.notNull]" item-text="name" bottom></v-select>
                </v-flex>
              </v-layout>
           </form>
         </v-container>
       </v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn class="blue--text darken-1" flat="flat" @click="close()">Close</v-btn>
         <v-btn class="blue--text darken-1" @click.prevent="register()" flat="flat" >Register</v-btn>
       </v-card-actions>
     </v-card>
    </v-dialog>
    <data-table></data-table>
  </div>
</template>

<script>
import Modal from '../Modal';
import DataTable from '../DataList';
import Fabricant from './Fabricant';
import HTTP from '../../http-common';

export default {
  name: 'dgo',
  data() {
    return {
      name: 'dgo',
      code: '',
      fabricant: '',
      god_model: '',
      site_id: '',
      dialog: false,
      fabricants: [],
      models: [],
      sites: [],
      errors: [],
      headers: [
        { text: 'ID', type: 'id', value: '' },
        { text: 'Código do DGO', type: 'text', name: 'code', value: '' },
        {
          text: 'Modelo do DGO',
          type: 'select',
          name: 'god_model',
          item_name: 'god_fabricant_model',
          itemText: 'name',
        },
        {
          text: 'Site',
          type: 'select',
          name: 'site_id',
          item_name: 'site',
          itemText: 'name',
        },
      ],
      rules: {
        notNull(value) {
          console.log('validating value');
          if (!value) {
            return 'This field is required.';
          }
          return true;
        },
      },
    };
  },
  methods: {
    close() {
      this.clear();
      this.dialog = false;
    },
    clear() {
      this.code = '';
      this.fabricant = '';
    },
    register() {
      const request = HTTP.post('/dgos/', {
        code: this.code,
        god_model: this.god_model.id,
        site_id: this.site_id.id,
      })
      .then()
      .catch((e) => {
        this.errors.push(e);
      });
      setTimeout(() => {
        this.close();
        this.$store.dispatch('getObjects');
      }, 500);
      return request;
    },
    getSites() {
      const request = HTTP.get('/sites/?all=1')
        .then((response) => {
          this.sites = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      return request;
    },
    getFabricants() {
      const request = HTTP.get('/god_fabricants/?all=1')
        .then((response) => {
          this.fabricants = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      return request;
    },
    getGODModel(fabr) {
      this.god_model = '';
      return HTTP.get('/god_fabricant_models/?search='.concat(fabr, '&all=1'))
        .then((response) => {
          this.models = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  watch: {
    fabricant() {
      this.getGODModel(this.fabricant.id);
    },
  },
  components: { Modal, DataTable, Fabricant },
  created() {
    this.getFabricants();
    this.getSites();
    this.$store.dispatch('setNewName', this.name);
    this.$store.dispatch('setNewHeaders', this.headers);
    this.$store.dispatch('getObjects');
  },
};

</script>
