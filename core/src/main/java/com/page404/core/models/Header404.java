/*
 * ***********************************************************************
 * Page 404 CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Page 404.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Page 404 and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Page 404
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Page 404.
 * ***********************************************************************
 */

package com.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Header404} Sling Model used for the {@code page404/components/header-404} component.
 * 
 */
@ConsumerType
public interface Header404
    extends ComponentExporter
{


    @JsonProperty("headertext")
    String getHeadertext();

}
